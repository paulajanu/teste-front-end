import { Select } from "antd";
const { Option } = Select; 

interface TimeListProps {
  timeOptions: string[];
}

export default function TimeList({ timeOptions } : TimeListProps) {
  return (
    <>
       <Select
        placeholder="Selecione sua região"
        style={{ width: 265 }}
        size="large"
      >
        {timeOptions.map((time, index) => (
          <Option key={index} value={time}>
            {time}
          </Option>
        ))}
      </Select>
    </>
  );
}
