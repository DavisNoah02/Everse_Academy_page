export async function submitForm(formData: Record<string, string>) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/submit-application`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  return response.json();
}
