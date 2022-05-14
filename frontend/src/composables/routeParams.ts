import { useRoute, type RouteParams } from "vue-router";
import { computed, type ComputedRef } from "vue";

export const useRouteParams = <T extends RouteParams>(): ComputedRef<T> => {
  const route = useRoute();

  return computed(() => route.params as T);
};