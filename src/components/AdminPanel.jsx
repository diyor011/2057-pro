
import React, { useState, useEffect } from "react";

const AdminPanel = ({ staffMembers, setStaffMembers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    description: "",
  });


  const openModal = (member = null) => {
    setEditingMember(member);
    if (member) {
      setFormData({
        name: member.name,
        position: member.position,
        description: member.description,
      });
    } else {
      setFormData({ name: "", position: "", description: "" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMember) {

      setStaffMembers(
        staffMembers.map((m) =>
          m.name === editingMember.name ? { ...m, ...formData } : m
        )
      );
    } else {
 
      const newMember = {
        ...formData,
        image: "/default-avatar.jpg",
      };
      setStaffMembers([...staffMembers, newMember]);
    }
    setIsModalOpen(false);
  };


  const handleDelete = (name) => {
    if (window.confirm(`${name} ni o'chirishni xohlaysizmi?`)) {
      setStaffMembers(staffMembers.filter((m) => m.name !== name));
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <button onClick={() => openModal()} className="btn btn-primary">
          + Add New Staff
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-100">
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Position</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffMembers.map((member, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-circle w-16 h-16">
                      <img
                        src={member.image || "/default-avatar.jpg"}
                        alt={member.name}
                      />
                    </div>
                  </div>
                </td>
                <td className="font-bold">{member.name}</td>
                <td>{member.position}</td>
                <td className="max-w-xs">{member.description}</td>
                <td>
                  <button
                    onClick={() => openModal(member)}
                    className="btn btn-sm btn-outline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member.name)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {editingMember ? "Edit Staff" : "Add New Staff"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control my-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control my-4">
                <label className="label">Position</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control my-4">
                <label className="label">Description</label>
                <textarea
                  className="textarea textarea-bordered"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
