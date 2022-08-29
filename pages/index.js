import Link from "next/link";
import { useRouter } from "next/router";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

export default function Homepage() {
  const router = useRouter();

  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
