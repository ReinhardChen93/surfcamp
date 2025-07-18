const BASE_URL = process.env.PUBLIC_API_URL ?? "http://localhost:1337";

export async function subscribeService(email: string) {
  const url = new URL("/api/newsletter-signups", BASE_URL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email,
        },
      }),
    });

    return response.json();
  } catch (error) {
    console.error("Subscribe Service Error:", error);
  }
}

export interface EventsSubscribeProps {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  event: {
    connect: [string];
  };
}

export interface EventsSubscribeProps {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  event: {
    connect: [string];
  };
}

export async function eventsSubscribeService(data: EventsSubscribeProps) {
  const url = new URL("/api/event-signups", BASE_URL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { ...data } }),
    });

    return await response.json();
  } catch (error) {
    console.error("Events Subscribe Service Error:", error);
  }
}
