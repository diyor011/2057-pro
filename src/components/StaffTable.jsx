
import React, { useState, useEffect } from "react";

const initialStaff = [
  {
    name: "Diyor",
    position: "CEO & Founder",
    description:
      "Kompaniya asoschisi va rahbari. Strategik rivojlanish uchun mas'ul.",
    image: "/assets/diyor.jpg",
  },
  {
    name: "Karomi",
    position: "Chief Technology Officer",
    description: "Texnologiya va innovatsiyalar bo'limi rahbari.",
    image: "/assets/karomi.jpg",
  },
  {
    name: "Xondamir",
    position: "Lead Developer",
    description: "Dasturiy ta'minot ishlab chiqish jamoasi rahbari.",
    image: "/assets/xondamir.jpg",
  },
  {
    name: "Muhammadali",
    position: "Senior Developer",
    description: "Backend va frontend ishlab chiqishda tajribali dasturchi.",
    image: "/assets/muhammadali.jpg",
  },
  {
    name: "Sarvar",
    position: "Designer",
    description:
      "UI/UX dizayner, mahsulotlarning chiroyli ko'rinishini ta'minlaydi.",
    image: "/assets/sarvar.jpg",
  },
  {
    name: "Ibrohim",
    position: "Project Manager",
    description:
      "Loyihalarni boshqarish va muddatlarda yetkazib berish uchun mas'ul.",
    image: "/assets/ibrohim.jpg",
  },
  {
    name: "Muhammadamin",
    position: "Project Manager",
    description:
      "Loyihalarni boshqarish va muddatlarda yetkazib berish uchun mas'ul.",
    image: "/assets/muhammadamin.jpg",
  },
];

const StaffTable = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    description: "",
    image: "",
  });


  useEffect(() => {
    const saved = localStorage.getItem("staffMembers");
    if (saved && saved !== "undefined" && saved !== "null") {
      try {
        const parsed = JSON.parse(saved);
        setStaffMembers(parsed);
        setFilteredStaff(parsed);
      } catch (e) {
        setStaffMembers(initialStaff);
        setFilteredStaff(initialStaff);
        localStorage.setItem("staffMembers", JSON.stringify(initialStaff));
      }
    } else {
      setStaffMembers(initialStaff);
      setFilteredStaff(initialStaff);
      localStorage.setItem("staffMembers", JSON.stringify(initialStaff));
    }
  }, []);

  // Har o'zgarishda saqlash
  useEffect(() => {
    if (staffMembers.length > 0) {
      localStorage.setItem("staffMembers", JSON.stringify(staffMembers));
    }
  }, [staffMembers]);

  // Qidiruv
  useEffect(() => {
    const filtered = staffMembers.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStaff(filtered);
  }, [searchTerm, staffMembers]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === "admin" && loginData.password === "123") {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setLoginData({ username: "", password: "" });
    } else {
      alert("Noto'g'ri login yoki parol!");
    }
  };

  const handleLogout = () => setIsLoggedIn(false);

  const openModal = (member = null) => {
    setEditingMember(member);
    if (member) {
      setFormData({ ...member });
    } else {
      setFormData({ name: "", position: "", description: "", image: "" });
    }
    setIsModalOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMember = {
      name: formData.name.trim(),
      position: formData.position.trim(),
      description: formData.description.trim(),
      image: formData.image || "https://via.placeholder.com/150?text=No+Image",
    };

    if (editingMember) {
      setStaffMembers(
        staffMembers.map((m) =>
          m.name === editingMember.name ? updatedMember : m
        )
      );
    } else {
      setStaffMembers([...staffMembers, updatedMember]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (name) => {
    if (window.confirm(`${name} ni o'chirishni xohlaysizmi?`)) {
      setStaffMembers(staffMembers.filter((m) => m.name !== name));
    }
  };

  const clearImage = () => setFormData({ ...formData, image: "" });

  return (
    <div className="container mx-auto p-4 sm:p-8 min-h-screen bg-base-200">
      <div className="navbar bg-base-100 mb-6 shadow rounded-box">
        <div className="flex-1 px-4">
          <h1 className="text-2xl font-bold">Ordinary</h1>
        </div>
        <div className="flex items-center gap-3 px-4">
          <input
            type="text"
            placeholder="Qidiruv..."
            className="input input-bordered input-sm w-full max-w-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {!isLoggedIn ? (
            <button
              onClick={() => setShowLoginModal(true)}
              className="btn btn-outline btn-sm"
            >
              Admin Login
            </button>
          ) : (
            <button onClick={handleLogout} className="btn btn-outline btn-sm">
              Logout
            </button>
          )}
        </div>
      </div>

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
            {filteredStaff.map((member, index) => (
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
