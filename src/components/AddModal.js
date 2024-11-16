import React, { useState } from 'react';
import "../index.css";

function AddModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    weight: '',
    material: '',
    price: '',
    feature: '',
    image: ''
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
      formData.price &&
      formData.image.trim()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill in all required fields.');
      return;
    }

    const newGear = {
      name: formData.name.trim(),
      category: formData.category.trim(),
      weight: parseInt(formData.weight),
      material: formData.material.trim(),
      price: parseFloat(formData.price),
      feature: formData.feature.trim(),
      image: formData.image.trim()
    };

    onSave(newGear);
  };

  return (
    <div className="modal-overlay-add" style={{ display: 'block' }}>
      <div className="add-modal" style={{ display: 'block' }}>
        <h2 className="text-center mb-4">Add New Gear</h2>
        <form onSubmit={handleSubmit}>
          {/* Item Name */}
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
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="url"
              className="form-control"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Add Gear
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

export default AddModal;