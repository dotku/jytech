"use client";

import { getDomain } from "@/utils/getDomain";
import { Card, CardBody, Spinner } from "@nextui-org/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";

export default function SharePage({ params }) {
  const domain = getDomain();
  const [data, setData] = useState(null);
  const [ifLoading, setIfLoading] = useState(true);
  const [error, setError] = useState(null);

  const genShare = useCallback(async () => {
    try {
      const rsp = await fetch(
        `${domain}/api/chatgpt/dataMapping/${params.id}`
      ).then((rsp) => rsp.json());
      setData(rsp);
    } catch (e) {
      setError(e.message);
    } finally {
      setIfLoading(false);
    }
  }, [params.id]);

  const list = useMemo(() => {
    if (!data) return [];
    const keys = Object.keys(data);
    return keys.map((k) => data[k]);
  }, [data]);

  useEffect(() => {
    console.log(params.id);
    genShare();
  }, []);

  if (ifLoading) return <Spinner />;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <>
      <div>
        {list.length ? (
          <>
            {list.map((item) =>
              item.message?.content?.parts &&
              item.message?.content?.parts[0] ? (
                <Card key={item.id} className="mb-3">
                  <CardBody className="p-5">
                    <Markdown>{item.message.content.parts[0]}</Markdown>
                  </CardBody>
                </Card>
              ) : null
            )}
          </>
        ) : (
          <>Empty List</>
        )}
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
