import AdminLayout from "@/components/layouts/admin/AdminLayout.vue";

export const admin = {
  path: "/admin",
  component: AdminLayout,
  children: [
    {
      path: "dashboard",
      name: "AdminDashboard",
      component: () => import("@/views/admin/dashboard/DashboardView.vue"),
      meta: { authenticated: true, authorization: "SYSTEM_ADMIN" },
    },

    {
      path: "animals",
      name: "AdminAnimalsSummary",
      component: () => import("@/views/admin/animals/AnimalsSummary.vue"),
      meta: { authenticated: true, authorization: "SYSTEM_ADMIN" },
    },
  ],
};
