import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;

    if (formData.email === "") {
      tempErrors.email = "Email est nécessaire";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      tempErrors.email = "Format d'email invalide";
      isValid = false;
    }

    if (formData.password === "") {
      tempErrors.password = "Mot de passe est nécessaire";
      isValid = false;
    } else if (!/^.{8,}$/.test(formData.password)) {
      tempErrors.password = "8 caractères minimum !";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <img
          src="/logo_DataAfriqueHub.png"
          alt="Logo DataAfriqueHub"
          className="w-[80px] m-auto"
        />
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex max-sm:flex-col items-center justify-between flex-wrap">
            <button
              type="submit"
              className="px-4 py-2 bg-[#006DE0] font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 max-sm:w-full max-sm:mb-5 text-white"
            >
              Se connecter
            </button>
            <a
              href="#"
              className="text-sm text-[#EB9B00] hover:underline max-sm:w-full text-center my-3 font-bold"
            >
              Mot de passe oublié ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
