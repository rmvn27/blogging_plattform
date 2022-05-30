import type { RouteDestinationWithoutParams } from "./types";
import type { RouteRecordRaw } from "vue-router";

export interface AdminRoutes {
  home: RouteDestinationWithoutParams;
  settings: RouteDestinationWithoutParams;
}

const createAdminRoute = (otherPath: string) => `/admin/${otherPath}`;

export const adminRoutes: AdminRoutes = {
  home: {
    path: "",
    name: "Admin/Home",
    route: createAdminRoute(""),
    component: () => import("@/components/pages/admin/HomePage.vue"),
  },
  settings: {
    path: "settings",
    name: "Admin/Settings",
    route: createAdminRoute("settings"),
    component: () => import("@/components/pages/admin/SettingsPage.vue"),
  },
};

export const adminRootRoute: RouteRecordRaw = {
  path: "/admin",
  component: () => import("@/components/pages/layout/AdminPageLayout.vue"),
  children: Object.values(adminRoutes),
  meta: {
    requiredUserRole: "ADMIN",
  },
};
