import type { RouteDestinationWithoutParams } from "./types";
import HomePage from "@/components/pages/admin/HomePage.vue";
import type { RouteRecordRaw } from "vue-router";
import AdminPageLayout from "@/components/pages/layout/AdminPageLayout.vue";
import SettingsPage from "@/components/pages/shared/SettingsPage.vue";

export interface AdminRoutes {
  home: RouteDestinationWithoutParams;
  settings: RouteDestinationWithoutParams;
}

const createAdminRoute = (otherPath: string) => `/admin/${otherPath}`;

export const adminRoutes: AdminRoutes = {
  home: {
    path: "",
    route: createAdminRoute(""),
    component: HomePage,
  },
  settings: {
    path: "settings",
    route: createAdminRoute("settings"),
    component: SettingsPage,
  },
};

export const adminRootRoute: RouteRecordRaw = {
  path: "/admin",
  component: AdminPageLayout,
  children: Object.values(adminRoutes),
  meta: {
    requiredUserType: "admin",
  },
};
