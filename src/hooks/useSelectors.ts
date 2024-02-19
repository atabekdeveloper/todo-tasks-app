import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useSelectors = () => {
  const { tasks, shared } = useAppSelector((s) => s);
  return { ...tasks, ...shared };
};
