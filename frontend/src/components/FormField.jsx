export const FormField = ({ field, labelSpacing, inputPadding = 'py-3' }) => {
  const fieldClass = `w-full rounded-md border border-solid border-field-edge bg-field px-3 ${inputPadding} [font:inherit] text-copy focus:border-accent focus:outline-1 focus:outline-solid focus:outline-accent`;

  return (
    <>
      <label className={`text-[13px] ${labelSpacing}`} htmlFor={field.name}>{field.label}</label>
      {field.rows ? (
        <textarea className={`${fieldClass} resize-y`} id={field.name} name={field.name} rows={field.rows} placeholder={field.placeholder} required />
      ) : (
        <input className={fieldClass} id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} required />
      )}
    </>
  );
};

export const FormButton = ({ children, margin = 'mt-5' }) => (
  <button className={`${margin} cursor-pointer rounded-md border-0 border-current bg-accent p-3 text-[14px] font-bold text-on-accent hover:bg-accent-hover`} type="button">
    {children}
  </button>
);
