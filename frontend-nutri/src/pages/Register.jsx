import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { ToastContainer } from 'react-toastify'
import { useFetch } from "../hooks/useFetch"

export const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const fetchDataBackend = useFetch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const registerUser = async (dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/registro`
        await fetchDataBackend(url, dataForm, "POST")
    }

    return (
        <div className="flex flex-col sm:flex-row h-screen">

            <ToastContainer />

            {/* Sección de formulario de registro */}
            <div className="w-full sm:w-1/2 h-screen flex justify-center items-center" style={{ backgroundColor: 'var(--color-base)' }}>

                <div className="md:w-4/5 sm:w-full">
                    {/* Contenedor del formulario */}

                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase" style={{ color: 'var(--color-primary)' }}>Welcome</h1>
                    <small className="block my-4 text-sm" style={{ color: 'var(--color-secondary)' }}>Please enter your details</small> 
                    
                    <form onSubmit={handleSubmit(registerUser)}>

                        {/* Campo para nombre */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">First Name</label>
                            <input type="text" placeholder="Enter your first name" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" 
                            {...register("nombre", { required: "El nombre es obligatorio" })}
                            />
                            {errors.nombre && <p className="text-red-800">{errors.nombre.message}</p>}
                        </div>

                        {/* Campo para apellido */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Last Name</label>
                            <input type="text" placeholder="Enter your last name" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" 
                            {...register("apellido", { required: "El apellido es obligatorio" })}
                            />
                            {errors.apellido && <p className="text-red-800">{errors.apellido.message}</p>}
                        </div>

                        {/* Campo para dirección */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Address</label>
                            <input type="text" placeholder="Enter your address" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" 
                            {...register("direccion", { required: "La direccion es obligatoria" })}
                            />
                            {errors.direccion && <p className="text-red-800">{errors.direccion.message}</p>}
                        </div>
                        
                        {/* Campo para celular */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Phone</label>
                            <input type="tel" placeholder="Enter your phone number" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" 
                            {...register("celular", { required: "El celular es obligatorio" })}
                            />
                            {errors.celular && <p className="text-red-800">{errors.celular.message}</p>}
                        </div>

                        {/* Campo para correo electrónico */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Email</label>
                            <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" 
                            {...register("email", { required: "El correo electrónico es obligatorio" })}
                            />
                            {errors.email && <p className="text-red-800">{errors.email.message}</p>}
                        </div>

                        {/* Campo para contraseña */}
                        <div className="mb-3 relative">
                            <label className="mb-2 block text-sm font-semibold">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"} // Cambia el tipo del input entre 'text' y 'password' según el estado
                                    placeholder="********************"
                                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500 pr-10"
                                    {...register("password", { required: "La contraseña es obligatoria" })}
                                />
                                    {errors.password && <p className="text-red-800">{errors.password.message}</p>}
                                {/* Botón para mostrar/ocultar la contraseña */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)} // Cambia el estado para mostrar/ocultar la contraseña
                                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                                >
                                    {/* Icono que cambia según el estado de la contraseña */}
                                    {showPassword ? (
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A9.956 9.956 0 0112 19c-4.418 0-8.165-2.928-9.53-7a10.005 10.005 0 0119.06 0 9.956 9.956 0 01-1.845 3.35M9.9 14.32a3 3 0 114.2-4.2m.5 3.5l3.8 3.8m-3.8-3.8L5.5 5.5" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-9.95 0a9.96 9.96 0 0119.9 0m-19.9 0a9.96 9.96 0 0119.9 0M3 3l18 18" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Botón para enviar el formulario */}
                        <div className="mb-3">
                            <button className="border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>Register</button>
                        </div>

                    </form>

                    {/* Enlace para iniciar sesión si ya tiene una cuenta */}
                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p style={{ color: 'var(--color-secondary)' }}>Already have an account?</p>
                        <Link to="/login" className="py-2 px-5 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>Sign In</Link>
                    </div>

                </div>

            </div>

            {/* Sección con imagen de fondo, solo visible en pantallas grandes */}
            <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-[url('/public/images/dogregister.jpg')] bg-no-repeat bg-cover bg-center sm:block hidden"></div>
        </div>
    );
};