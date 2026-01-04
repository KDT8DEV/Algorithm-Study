import React, { FormEvent } from "react";

export interface SearchFilters {
  id?: string;
  searchOpt?: string;
  searchText?: string;
  startDate?: string;
  endDate?: string;
  venueId?: string;
}

interface PanelProps {
  onSearch: (filters: SearchFilters) => void;
}

function Panel({ onSearch }: PanelProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const filters: SearchFilters = {};

    formData.forEach((value, key) => {
      const strValue = value.toString().trim();
      if (strValue !== "") {
        filters[key as keyof SearchFilters] = strValue;
      }
    });

    onSearch(filters);
    e.currentTarget.reset();
  };

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <div className="filter_form">
        <label className="label">Event ID</label>
        <input name="id" />
      </div>
      <div className="filter_form">
        <label className="label">Event 내용</label>
        <div className="input_optional">
          <select name="searchOpt" defaultValue="all">
            <option value="all">ALL</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
          </select>
          <input name="searchText" />
        </div>
      </div>
      <div className="filter_form">
        <label className="label">이벤트 기간</label>
        <div className="date">
          <div className="sub-label">Start</div>
          <input type="date" name="startDate" />
        </div>
        <div className="date">
          <div className="sub-label">End</div>
          <input type="date" name="endDate" />
        </div>
      </div>
      <div className="filter_form">
        <label className="label">Venue ID</label>
        <input name="venueId" />
      </div>
      <div>
        <input className="btn-submit" type="submit" value="필터" />
      </div>
    </form>
  );
}
export default Panel;
