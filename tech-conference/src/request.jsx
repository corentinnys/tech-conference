import { useEffect, useState } from "react";

export function useRequest() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const res = await fetch('/data.json');

                if (!res.ok) {
                    throw new Error(`Erreur HTTP : ${res.status}`);
                }

                const result = await res.json();

                console.log(result);

                setData(result);

            } catch (err) {
                console.error("Erreur:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (value) {
            fetchData();
        }

    }, [value]);

    return { data, loading, error };
}