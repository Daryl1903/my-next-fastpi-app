

export default async function Home() {
  const role = await fetchEngineerRole({ title: 'Frontend Developer' });

  return (
    <>
      <div>{`The main skill of a ${role.title} is ${role.mainskill}.`}</div>
    </>
  );
}

async function fetchEngineerRole({ title }: { title: string }) {
 
  const baseUrl = "http://localhost:3000";

  try {
    const response = await fetch(
      `${baseUrl}/api/engineer-roles?title=${title}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const role = await response.json();
    return role;
  } catch (error) {
    console.error("Error fetching engineer role:", error);
    return null;
  }
}
