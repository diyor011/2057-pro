
import React, { useState, useEffect } from "react";
import shifu from "../assets/diyor.jpg"
import sharabara from "../assets/karomi.jpg"
import xondamir from "../assets/xondamir.jpg";
import muhammadali from "../assets/muhammadali.jpg";
import sarvar from "../assets/sarvar.jpg";
import ibrohim from "../assets/ibrohim.jpg";
import muhammadamin from "../assets/muhammadamin.jpg";

const initialStaff = [
  {
    name: "Diyor",
    position: "CEO & Founder",
    description:
      "Kompaniya asoschisi va rahbari. Strategik rivojlanish uchun mas'ul.",
    image: shifu,
  },
  {
    name: "Karomi",
    position: "Chief Technology Officer",
    description: "Texnologiya va innovatsiyalar bo'limi rahbari.",
    image: sharabara,
  },
  {
    name: "Xondamir",
    position: "Lead Developer",
    description: "Dasturiy ta'minot ishlab chiqish jamoasi rahbari.",
    image: xondamir,
  },
  {
    name: "Muhammadali",
    position: "Senior Developer",
    description: "Backend va frontend ishlab chiqishda tajribali dasturchi.",
    image: muhammadali,
  },
  {
    name: "Sarvar",
    position: "Designer",
    description:
      "UI/UX dizayner, mahsulotlarning chiroyli ko'rinishini ta'minlaydi.",
    image: sarvar,
  },
  {
    name: "Ibrohim",
    position: "Project Manager",
    description:
      "Loyihalarni boshqarish va muddatlarda yetkazib berish uchun mas'ul.",
    image: ibrohim,
  },
  {
    name: "Muhammadamin",
    position: "Project Manager",
    description:
      "Loyihalarni boshqarish va muddatlarda yetkazib berish uchun mas'ul.",
    image: muhammadamin,
  },
];

const StaffTable = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const [isModalOpen, setIsModalOpen] = useState(false);




  







  return (
    <div className="container mx-auto p-4 sm:p-8 min-h-screen bg-base-200">
      <div className="overflow-x-auto shadow-lg rounded-box">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-base-300">
              <th className="text-center">#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Position</th>
              <th>Description</th>
              {isLoggedIn && <th className="text-center">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {initialStaff.map((member, index) => (
              <tr key={index} className="hover">
                <th className="text-center">{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-circle w-20 h-20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </td>
                <td className="font-bold">{member.name}</td>
                <td>{member.position}</td>
                <td className="max-w-xs">{member.description}</td>
                {isLoggedIn && (
                  <td className="text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => openModal(member)}
                        className="btn btn-sm btn-outline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(member.name)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isLoggedIn && (
        <div className="mt-8 text-center">
          <button
            onClick={() => openModal()}
            className="btn btn-primary btn-lg"
          >
            + Add New Staff
          </button>
        </div>
      )}

      {showLoginModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Admin Login</h3>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full mb-4"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-6"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <div className="flex gap-4">
                <button type="submit" className="btn btn-primary flex-1">
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="btn flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
            <p className="text-sm opacity-70 mt-4 text-center">
              Username: admin | Password: 123
            </p>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">
              {editingMember ? "Edit Staff" : "Add New Staff"}
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full mb-4"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Position"
                className="input input-bordered w-full mb-4"
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered w-full mb-4"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />

              <div className="mb-4">
                <input
                  type="file"
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                  onChange={handleImageChange}
                />
                {formData.image && (
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-full"
                    />
                    <button
                      type="button"
                      onClick={clearImage}
                      className="btn btn-error btn-sm"
                    >
                      Rasmni o'chirish
                    </button>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn btn-primary flex-1">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffTable;
