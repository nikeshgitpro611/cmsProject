import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "987dhbjcxtyw",
  environment: "master",
  accessToken: "q_PmZadTQYMKchKR2r9r1fdN-NqWtfke0tBTLcxA3DA",
});

export const useFetchProjects = () => {
  const [loding, setLoding] = useState(true);
  const [project, setProject] = useState([]);

  const getData = async () => {
    try {
        const response = await client.getEntries({content_type: "projects"});
        console.log(response);
        const projects = response.items.map((item) => {
            const {url, title, image} = item.fields;
            const id = item.sys.id;
            const img = image?.fields?.file?.url
            return {title, url, id, img};
        });
        setProject(projects)
        setLoding(false)
    } catch (error) {
        console.log(error);
        setLoding(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {loding, project}
};


