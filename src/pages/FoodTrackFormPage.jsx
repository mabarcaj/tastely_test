import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { VisitedSpan } from "../components/VisitedSpan";
import { NonVisitedSpan } from "../components/NonVisitedSpan";
import {
    createFoodTrack,
    getFoodTrack,
    deleteFoodTrack,
    updateFoodTrack,
} from "../api/foodtracks.api";
import StarRating from "../components/StarRating";

export function FoodTrackFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const navigate = useNavigate();
    const params = useParams([]);
    const [status, setStatus] = useState([]);
    const [rating, setRating] = useState([]);

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateFoodTrack(params.id, data);
            toast.success("FoodTrack Actualizado!", {
                position: "bottom-right",
                style: {
                    background: "#8D80AD",
                    color: "#fff",
                },
            });
        } else {
            await createFoodTrack(data);
            toast.success("FoodTrack Creado!", {
                position: "bottom-right",
                style: {
                    background: "#8D80AD",
                    color: "#fff",
                },
            });
        }
        navigate("/tastely_test/");
    });

    useEffect(() => {
        async function loadFoodTrack() {
            if (params.id) {
                const { data } = await getFoodTrack(params.id);
                setValue("siteName", data.siteName);
                setValue("address", data.address);
                setValue("foodType", data.foodType);
                setValue("visited", data.visited);
                setValue("rating", data.rating);
                setStatus(data.visited);
                setRating(data.rating);
            }
        }
        loadFoodTrack();
    }, []);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                {errors.siteName && (
                    <span className="text-red-500 font-bold">
                        Nombre del Local es requerido
                    </span>
                )}
                <input
                    type="text"
                    placeholder="Nombre del Local"
                    {...register("siteName", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-lime-400"
                />

                {errors.siteName && (
                    <span className="text-red-500 font-bold">
                        Dirección es requerida
                    </span>
                )}
                <input
                    type="text"
                    placeholder="Dirección"
                    {...register("address", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-lime-400"
                />

                {errors.siteName && (
                    <span className="text-red-500 font-bold">
                        Tipo de Comida que ofrece es requerida
                    </span>
                )}
                <input
                    type="text"
                    placeholder="Tipo de Comida que ofrece"
                    {...register("foodType", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-lime-400"
                />
                <div className="grid grid-cols-2 bg-zinc-700 p-3 rounded-lg w-auto mb-3 text-lime-400 text-center ">
                    {status ? <VisitedSpan /> : <NonVisitedSpan />}
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className=""
                        {...register("visited")}
                    />
                </div>
                <div className="grid grid-cols-2 bg-zinc-700 p-3 rounded-lg w-auto">
                    <input
                        type="number"
                        min={1}
                        max={5}
                        className="text-center bg-transparent hover:bg-zinc-600 text-cyan-300"
                        {...register("rating")}
                    />
                    <span className="text-lime-400 text-center text-md">
                        Rating
                    </span>

                    {/**
                     * <StarRating rating={rating} />
                     */}
                </div>
                <button className="bg-[#57886C] p-3 rounded-lg block w-full mt-3 text-white">
                    Guardar
                </button>
            </form>
            {params.id && (
                <div className="div flex justify-end">
                    <button
                        onClick={async () => {
                            const accepted = window.confirm(
                                "¿Está seguro que quiere eliminar este registro?"
                            );
                            if (accepted) {
                                await deleteFoodTrack(params.id);
                                toast.success("FoodTrack Eliminado!", {
                                    position: "bottom-right",
                                    style: {
                                        background: "#8D80AD",
                                        color: "#fff",
                                    },
                                });
                                navigate("/tastely_test/");
                            }
                        }}
                        className="bg-[#C05746] p-3 rounded-lg w-48 mt-3 text-white"
                    >
                        Borrar
                    </button>
                </div>
            )}
        </div>
    );
}
