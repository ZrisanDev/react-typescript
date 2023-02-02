import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={inputValues.nick}
            name="nick"
            placeholder="nick"
          />
          <input
            type="number"
            onChange={handleChange}
            value={inputValues.subMonths}
            name="subMonths"
            placeholder="subMonths"
          />
          <input
            type="text"
            onChange={handleChange}
            value={inputValues.avatar}
            name="avatar"
            placeholder="avatar"
          />
          <input
            type="text"
            onChange={handleChange}
            value={inputValues.description}
            name="description"
            placeholder="description"
          />
          <button>Save new sub</button>
        </form>
      </div>
    </>
  );
};

export default Form;
