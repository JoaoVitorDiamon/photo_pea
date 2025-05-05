import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Foto = {
  id: string;
  timestamp: string;
};

export default function PainelFotos() {
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://0195-2804-14d-78a6-8fae-fc84-852-1807-628c.ngrok-free.app/images",
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const json = await res.json();
          setFotos(json);
        } else {
          const text = await res.text();
          console.error("Resposta não é JSON:", text);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar fotos:", err);
        setLoading(false);
      });
  }, []);

  const fotosPorHora = fotos.reduce<Record<string, number>>((acc, foto) => {
    const hora = new Date(foto.timestamp).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
    });
    acc[hora] = (acc[hora] || 0) + 1;
    return acc;
  }, {});

  const dadosGrafico = Object.entries(fotosPorHora).map(([hora, count]) => ({
    hora,
    fotos: count,
  }));

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-10 bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
      <div className="max-w-6xl  mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Painel Administrativo de Fotos
        </h1>

        {loading ? (
          <p className="text-lg text-gray-600">Carregando fotos...</p>
        ) : (
          <>
            <p className="text-xl font-medium mb-6 text-gray-700">
              Total de pessoas que tiraram foto:{" "}
              <span className="font-bold text-gray-700">{fotos.length}</span>
            </p>

            <div className="w-full h-64 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosGrafico}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hora" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="fotos" fill="#999999" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full table-auto text-sm">
                <thead className="bg-blue-50 text-gray-700 font-semibold">
                  <tr>
                    <th className="px-4 py-3 border">ID</th>
                    <th className="px-4 py-3 border">Link da Foto</th>
                    <th className="px-4 py-3 border">Data</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {fotos.map((foto) => (
                    <tr key={foto.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{foto.id}</td>
                      <td className="border px-4 py-2">
                        <a
                          href={`https://0195-2804-14d-78a6-8fae-fc84-852-1807-628c.ngrok-free.app/images/${foto.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 underline hover:text-blue-800"
                        >
                          Ver Foto
                        </a>
                      </td>
                      <td className="border px-4 py-2">
                        {new Date(foto.timestamp).toLocaleString("pt-BR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
