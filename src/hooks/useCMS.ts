import { useEffect, useState } from "react";
import {
  aiSolutionsFallback,
  b2bCasesFallback,
  coursesFallback,
  eventsFallback,
  partnersFallback,
  teamFallback
} from "@/data/fallbackContent";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type QueryResult<T> = {
  data: T[];
  loading: boolean;
  error: string | null;
};

function useCMSQuery<T extends { id: string }>(table: string, fallback: T[]): QueryResult<T> {
  const [data, setData] = useState<T[]>(fallback);
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      setLoading(true);

      const { data: rows, error: fetchError } = await supabase
        .from(table)
        .select("*")
        .eq("is_visible", true)
        .order("sort_order", { ascending: true });

      if (!isMounted) {
        return;
      }

      if (fetchError) {
        setError(fetchError.message);
        setData(fallback);
      } else if (rows && rows.length > 0) {
        setData(rows as T[]);
      }

      setLoading(false);
    }

    void load();

    return () => {
      isMounted = false;
    };
  }, [fallback, table]);

  return { data, loading, error };
}

export function useEvents() {
  return useCMSQuery("events", eventsFallback);
}

export function usePartners() {
  return useCMSQuery("partners", partnersFallback);
}

export function useTeam() {
  return useCMSQuery("team", teamFallback);
}

export function useCourses() {
  return useCMSQuery("courses", coursesFallback);
}

export function useB2bCases() {
  return useCMSQuery("b2b_cases", b2bCasesFallback);
}

export function useAiSolutions() {
  return useCMSQuery("ai_solutions", aiSolutionsFallback);
}
