export const ServiceConfig = {
  BASE_URL: "http://localhost:8080",
  GET: async (entity: string) => {
    const response = await fetch(`${ServiceConfig.BASE_URL}/${entity}`);
    if (response.ok) {
      return await response.json();
    }
    return response.status;
  },
};
