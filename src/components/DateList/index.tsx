import { Select } from "antd";
import { useEffect, useState } from "react";
import TimeList from "../TimeList";
import * as S from './styles'
const { Option } = Select;

export default function DateList() {
  const [consultationDate, setConsultationDate] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [timeOptions, setTimeOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchConsultationDate = async () => {
      try {
        const response = await fetch('/api/scheduling/date');

        if (!response.ok) {
          throw new Error(`Request error: ${response.status}`);
        }

        const data = await response.json();
        setConsultationDate(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchConsultationDate();
  }, []);

  const handleDateChange = async (date: string) => {
    setSelectedDate(date);
    try {
      const response = await fetch('/api/scheduling/time', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date }),
      });

      if (!response.ok) {
        throw new Error(`Request error: ${response.status}`);
      }

      const data: string[] = await response.json();
      setTimeOptions(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.SelectContainer>
        <Select
          placeholder="Selecione sua região"
          style={{ width: 265 }}
          size="large"
          onChange={handleDateChange}
        >
          {consultationDate.map((date, index) => (
            <Option key={index} value={date}>
              {date}
            </Option>
          ))}
        </Select>
      </S.SelectContainer>
      <TimeList timeOptions={selectedDate ? timeOptions : []} />
    </S.Container>
  );
}
