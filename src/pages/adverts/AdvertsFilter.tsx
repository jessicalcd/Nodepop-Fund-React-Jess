import { useState, useEffect } from "react";

interface AdvertsFilterProps {
  filters: {
    name: string;
    sale: string;
    priceMin: string;
    priceMax: string;
    tags: string[];
  };
  availableTags: string[];
  onChange: (newFilters: AdvertsFilterProps['filters']) => void;
}

function AdvertsFilter({ filters, availableTags, onChange }: AdvertsFilterProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange({ ...filters, [e.target.name]: e.target.value });
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map(option => option.value);
    onChange({ ...filters, tags: selected });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={filters.name}
        onChange={handleInputChange}
      />

      <select name="sale" value={filters.sale} onChange={handleInputChange}>
        <option value="">Todos</option>
        <option value="true">Venta</option>
        <option value="false">Compra</option>
      </select>

      <input
        type="number"
        name="priceMin"
        placeholder="Precio mínimo"
        value={filters.priceMin}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="priceMax"
        placeholder="Precio máximo"
        value={filters.priceMax}
        onChange={handleInputChange}
      />

      <select name="tags" multiple value={filters.tags} onChange={handleTagChange}>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
    </form>
  );
}
export default AdvertsFilter;
