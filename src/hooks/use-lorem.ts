import Length from "@/pages/api/[length]";
import { useEffect, useState } from "react";

export type LengthType = 'word' | 'sentence' | 'paragraph';

export type Lorem = {
  isFetching: boolean,
  ipsum: string | undefined
}

export type Response = {
  response: string;
}

export function useLorem(length: LengthType): Lorem {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [ipsum, setIpsum] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/api/${length}`)
      .then(data => data.json())
      .then((res) => setIpsum((res as Response).response))
      .catch(console.error)
      .finally(() => setIsFetching(false));
  }, [length])

  return { isFetching, ipsum };
}