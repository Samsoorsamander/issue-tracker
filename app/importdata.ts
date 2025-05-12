import { PrismaClient } from "@prisma/client";

const issues = [
  {
    title: "Login page fails to redirect after authentication",
    description:
      "Upon successful authentication, the login page does not redirect users to the dashboard. This issue affects user experience and may cause confusion.",
    status: "OPEN",
    createdAt: new Date("2025-04-01T09:00:00Z"),
    updatedAt: new Date("2025-04-01T09:00:00Z"),
  },
  {
    title: "API returns 500 error on data fetch",
    description:
      "When attempting to fetch data from the /api/data endpoint, a 500 Internal Server Error is returned. Logs indicate a null pointer exception.",
    status: "IN_PROGRESS",
    createdAt: new Date("2025-04-02T10:15:00Z"),
    updatedAt: new Date("2025-04-03T11:30:00Z"),
  },
  {
    title: "Responsive layout breaks on mobile devices",
    description:
      "The application layout does not adjust properly on screens smaller than 768px. Elements overlap and navigation becomes inaccessible.",
    status: "CLOSED",
    createdAt: new Date("2025-04-03T08:45:00Z"),
    updatedAt: new Date("2025-04-05T14:20:00Z"),
  },
  {
    title: "Search functionality yields no results",
    description:
      "Users report that entering search terms returns no results, even when relevant data exists. This affects content discoverability.",
    status: "OPEN",
    createdAt: new Date("2025-04-04T12:00:00Z"),
    updatedAt: new Date("2025-04-04T12:00:00Z"),
  },
  {
    title: "Password reset email not sent",
    description:
      "The password reset feature does not send emails to users requesting a reset. SMTP logs show authentication errors.",
    status: "IN_PROGRESS",
    createdAt: new Date("2025-04-05T09:30:00Z"),
    updatedAt: new Date("2025-04-06T10:45:00Z"),
  },
  {
    title: "Dropdown menu overlaps footer",
    description:
      "On certain pages, the dropdown menu extends beyond its container and overlaps the footer, obstructing content.",
    status: "CLOSED",
    createdAt: new Date("2025-04-06T11:15:00Z"),
    updatedAt: new Date("2025-04-07T13:50:00Z"),
  },
  {
    title: "Image upload fails with large files",
    description:
      "Uploading images larger than 5MB results in a timeout error. There is a need to handle large file uploads more gracefully.",
    status: "OPEN",
    createdAt: new Date("2025-04-07T14:25:00Z"),
    updatedAt: new Date("2025-04-07T14:25:00Z"),
  },
  {
    title: "Session expires prematurely",
    description:
      "User sessions are expiring after 10 minutes of inactivity, despite the expected timeout being set to 30 minutes.",
    status: "IN_PROGRESS",
    createdAt: new Date("2025-04-08T10:00:00Z"),
    updatedAt: new Date("2025-04-09T11:30:00Z"),
  },
  {
    title: "Notifications not displayed in real-time",
    description:
      "Real-time notifications are delayed or not displayed at all. WebSocket connections appear unstable.",
    status: "CLOSED",
    createdAt: new Date("2025-04-09T09:45:00Z"),
    updatedAt: new Date("2025-04-10T15:10:00Z"),
  },
  {
    title: "Form validation messages not shown",
    description:
      "When submitting forms with invalid data, no validation messages are displayed, leaving users unaware of errors.",
    status: "OPEN",
    createdAt: new Date("2025-04-10T13:00:00Z"),
    updatedAt: new Date("2025-04-10T13:00:00Z"),
  },
  {
    title: "Dark mode theme not applied on all pages",
    description:
      "Switching to dark mode does not apply the theme consistently across all pages. Some components retain light mode styling.",
    status: "IN_PROGRESS",
    createdAt: new Date("2025-04-11T08:20:00Z"),
    updatedAt: new Date("2025-04-12T09:35:00Z"),
  },
  {
    title: "Search index not updated after content addition",
    description:
      "Newly added content does not appear in search results. The search index seems not to be updating as expected.",
    status: "CLOSED",
    createdAt: new Date("2025-04-12T10:10:00Z"),
    updatedAt: new Date("2025-04-13T12:45:00Z"),
  },
  {
    title: "User profile pictures not loading",
    description:
      "Profile pictures fail to load on the user dashboard. The image URLs return 404 errors.",
    status: "OPEN",
    createdAt: new Date("2025-04-13T11:30:00Z"),
    updatedAt: new Date("2025-04-13T11:30:00Z"),
  },
  {
    title: "Email notifications sent multiple times",
    description:
      "Users receive duplicate email notifications for the same event. This leads to confusion and potential annoyance.",
    status: "IN_PROGRESS",
    createdAt: new Date("2025-04-14T09:15:00Z"),
    updatedAt: new Date("2025-04-15T10:40:00Z"),
  },
  {
    title: "Calendar events not saving",
    description:
      "Attempting to save new events to the calendar results in an error message. The events are not persisted.",
    status: "CLOSED",
    createdAt: new Date("2025-04-15T14:00:00Z"),
    updatedAt: new Date("2025-04-16T16:25:00Z"),
  },
  {
    title: "Language selection not retained",
    description:
      "After selecting a preferred language, the application reverts to the default language upon navigation.",
    status: "OPEN",
    createdAt: new Date("2025-04-16T10:50:00Z"),
    updatedAt: new Date("2025-04-16T10:50:00Z"),
  },
  {
    title: "File download link broken",
    description:
      "Clicking on the download link for reports results in a 404 error. The file paths may be incorrect.",
    status: "IN_PROGRESS",
    createdAt: new Date("2025-04-17T13:20:00Z"),
    updatedAt: new Date("2025-04-18T14:35:00Z"),
  },
  {
    title: "User activity logs not updating",
    description:
      "The activity logs on the admin panel do not reflect recent user actions. There may be an issue with the logging mechanism.",
    status: "CLOSED",
    createdAt: new Date("2025-04-18T09:40:00Z"),
    updatedAt: new Date("2025-04-19T11:55:00Z"),
  },
  {
    title: "Search autocomplete suggestions irrelevant",
    description:
      "The autocomplete feature suggests unrelated terms, reducing its usefulness for users seeking specific content.",
    status: "OPEN",
    createdAt: new Date("2025-04-19T12:30:00Z"),
    updatedAt: new Date("2025-04-19T12:30:00Z"),
  },
  {
    title: "Two-factor authentication setup fails",
    description:
      "Users are unable to complete the two-factor authentication setup process. QR codes fail to generate.",
    status: "IN_PROGRESS",
    createdAt: new Date("2025-04-20T08:10:00Z"),
    updatedAt: new Date("2025-04-21T09:25:00Z"),
  },
];

const prisma = new PrismaClient();

async function main() {
  await prisma.issue.createMany({
    data: issues,
    skipDuplicates: true, // Optional: skips records with duplicate unique fields
  });
}

main()
  .then(() => {
    console.log("Data seeded successfully.");
  })
  .catch((e) => {
    console.error("Error seeding data:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
