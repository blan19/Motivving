import React, { useCallback, useState, VFC } from 'react';

interface PropsTypes {
  item: {
    key: number;
    id: string;
    title: string;
  };
  check: Set<number>;
  onCheckedHandler: (id: number, bChecked: boolean, check: any) => void;
}

const CheckBox: VFC<PropsTypes> = ({ item, onCheckedHandler, check }) => {
  const [checked, setChecked] = useState(false);
  const onChangeChecked = useCallback(
    (e) => {
      setChecked(!checked);
      onCheckedHandler(item.key, e.target.checked, check);
    },
    [check, checked, item.key, onCheckedHandler],
  );
  return (
    <>
      <input
        key={item.id}
        type="checkbox"
        name="choice"
        id={item.id}
        checked={checked}
        onChange={(e) => onChangeChecked(e)}
      />
      <label htmlFor={item.id}>{item.title}</label>
    </>
  );
};

export default CheckBox;

//