type Props = {
  data: any[];
};

const Todos: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      {data.map((item: any) => (
        <div key={item.id}> {item.title}</div>
      ))}
    </>
  );
};

export default Todos;
