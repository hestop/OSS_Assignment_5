import React, { useState } from 'react';

function EditModal({ gear, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: gear.name || '',
    category: gear.category || '',
    weight: gear.weight || '',
    material: gear.material || '',
    price: gear.price || '',
    feature: gear.feature || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    return (
      formData.name.trim() &&
      formData.category.trim() &&
      formData.weight &&
      formData.material.trim() &&
      formData.price
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill in all required fields.');
      return;
    }

    const updatedGear = {
      ...gear,
      name: formData.name.trim(),
      category: formData.category.trim(),
      weight: parseInt(formData.weight),
      material: formData.material.trim(),
      price: parseFloat(formData.price),
      feature: formData.feature.trim()
    };

    onSave(updatedGear);
  };

  return (
    <div className="modal-overlay" style={{ display: 'block' }}>
      <div className="edit-modal" style={{ display: 'block' }}>
        <h2 className="text-center mb-4">Edit Gear Information</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={gear.id} />
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Weight (g)</label>
            <input
              type="number"
              className="form-control"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Material</label>
            <input
              type="text"
              className="form-control"
              name="material"
              value={formData.material}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Feature</label>
            <input
              type="text"
              className="form-control"
              name="feature"
              value={formData.feature}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;