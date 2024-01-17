export const addStyleProps = (
  newProps: Record<string, string>,
  typographyProps: Record<string, string>
) => Object.assign(newProps, typographyProps);
