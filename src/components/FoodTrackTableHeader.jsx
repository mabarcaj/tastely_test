export function FoodTrackTableHeader() {
    const x = 12;
    return (
        <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Nombre Local
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Dirección
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Tipo de Comida
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Rating
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Status
            </th>
            {/**
             *
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Fecha de Visita
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Fecha de Evaluación
            </th>
             */}
        </tr>
    );
}
