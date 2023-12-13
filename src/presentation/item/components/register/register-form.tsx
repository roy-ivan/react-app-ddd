import { useRegisterItemMutation } from "../../../../infrastructure/item/register.api";
import { useForm } from "react-hook-form";
import { type } from "../../../../domain/type.enum";
import React from "react";
import { ItemRegisterInterface } from "../../../../domain/item/item-register.interface";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm<ItemRegisterInterface>();

  const [registerItem, { isLoading, isError, isSuccess }] = useRegisterItemMutation();

  const onSubmit = (data: ItemRegisterInterface) => {
    registerItem(data);
    reset();
  };

  const [selected, setSelected] = React.useState<type>(type.IMPORT);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value as type);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="spec">Spec: </label>
        <input id="spec" type="text" {...register("spec", { required: true })} />
      </div>
      <div>
        <label htmlFor="sub">Sub spec section: </label>
        <input id="sub" type="number" {...register("sub", { required: true, min: 1 })} />
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        <input id="title" type="text" {...register("title", { required: true })} />
      </div>

      <div>
        <label htmlFor="description">Description: </label>
        <input id="description" type="text" {...register("description", { required: true })} />
      </div>

      <div>
        <label htmlFor="type">Type: </label>
        <select id="type" value={selected} onChange={handleChange}>
          {Object.values(type).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create"}
        </button>
      </div>
      {isError && <p>An error occurred while recording data</p>}
      {isSuccess && <p>The data has been registered successfully.</p>}
    </form>
  );
};

export default RegisterForm;
