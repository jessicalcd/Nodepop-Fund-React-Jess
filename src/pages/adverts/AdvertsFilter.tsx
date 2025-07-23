import "./AdvertsFilter.css";
import type { AdvertsFilters } from "./types";


interface AdvertsFilterProps {
  filters: AdvertsFilters;
  availableTags: string[];
  onChange: (filters: AdvertsFilters) => void;
}

function AdvertsFilter({ filters, availableTags, onChange }: AdvertsFilterProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange({ ...filters, [e.target.name]: e.target.value });
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
    onChange({ ...filters, tags: selected });
  };

  return (
    <form className="adverts-filter">
      <input type="text" name="name" placeholder="Nombre" value={filters.name} onChange={handleInput} />
      <select name="sale" value={filters.sale} onChange={handleInput}>
        <option value="">Todos</option>
        <option value="true">Venta</option>
        <option value="false">Compra</option>
      </select>
      <select name="tags" multiple value={filters.tags} onChange={handleMultiSelect}>
        {availableTags.map(tag => (
          <option key={tag}>{tag}</option>
        ))}
      </select>
    </form>
  );
}

export default AdvertsFilter;



