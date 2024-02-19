import { getRoutes } from 'src/components/layouts/routes';

export const useLabel = (path: string) => {
  const routes = getRoutes();
  const route = routes.find((el) => el.key === path);
  return route?.label;
};
