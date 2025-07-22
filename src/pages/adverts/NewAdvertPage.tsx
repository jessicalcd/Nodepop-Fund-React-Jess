import "./newAdvertPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/ui/button";
import Page from "../../components/layout/page";
import { createAdvert, getTags } from "./service";

function NewAdvertPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    sale: "true",
    price: "",
    tags: [] as string[],
    photo: undefined as File | undefined,
  });

  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTags().then(setTags);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      setForm({ ...form, photo: files?.[0] });
    } else if (name === "tags") {
      const selected = Array.from((e.target as HTMLSelectElement).selectedOptions).map(opt => opt.value);
      setForm({ ...form, tags: selected });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.tags.length) {
      setError("Todos los campos excepto la foto son obligatorios.");
      return;
    }

    try {
      const created = await createAdvert({
        name: form.name,
        price: Number(form.price),
        sale: form.sale === "true",
        tags: form.tags,
        photo: form.photo,
      });
      navigate(`/adverts/${created.id}`);
    } catch (err) {
      setError("Error al crear el anuncio.");
    }
  };

  const isValid = form.name && form.price && form.tags.length;

  return (
    <Page title="Crear nuevo anuncio">
      <div className="new-advert-page">
        <form className="new-advert-page-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />

          <select name="sale" value={form.sale} onChange={handleChange}>
            <option value="true">Venta</option>
            <option value="false">Compra</option>
          </select>

          <input name="price" type="number" placeholder="Precio" value={form.price} onChange={handleChange} required />

          <select name="tags" multiple value={form.tags} onChange={handleChange} required>
            {tags.map((tag) => (
              <option key={tag}>{tag}</option>
            ))}
          </select>

          <input type="file" name="photo" onChange={handleChange} />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="new-advert-page-footer">
            <Button type="submit" className="new-advert-page-submit" $variant="primary" disabled={!isValid}>
              Crear anuncio
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default NewAdvertPage;
