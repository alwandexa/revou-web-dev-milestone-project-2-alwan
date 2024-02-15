import { memo, useState } from "react";
import { Form, Input, Select, Space } from "antd";
import { useTranslation } from "react-i18next";

interface Country { 
  [key: string]: { states: string[] } 
}

interface State {
  [key: string]: string[];
}

const AddressInformation = memo(() => {
  const { t } = useTranslation();

  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("California");
  const [city, setCity] = useState("Los Angeles");

  const countries: Country = {
    USA: {
      states: ["California", "Texas"],
    },
    India: {
      states: ["Maharashtra", "Karnataka"],
    },
  };

  const states: State = {
    California: ["Los Angeles", "San Francisco"],
    Texas: ["Houston", "Austin"],
    Maharashtra: ["Mumbai", "Pune"],
    Karnataka: ["Bangalore", "Mysore"],
  };

  const handleCountryChange = (value: string) => {
    setCountry(value);

    setState(countries[value].states[0]);
    setCity(states[countries[value].states[0]][0]);
  };

  const handleStateChange = (value: string) => {
    setState(value);

    setCity(states[value][0]);
  };

  return (
    <>
      <Form.Item
        name="Country"
        label={t("country")}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select value={country} onChange={handleCountryChange}>
          {Object.keys(countries).map((country) => (
            <Select.Option key={country}>{country}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      {/* <Space> */}
      <Form.Item
        name="State"
        label={t("state")}
        rules={[{ type: "string", required: true }]}
      >
        {/* <Input /> */}
        <Select value={state} onChange={handleStateChange}>
          {countries[country].states.map((state) => (
            <Select.Option key={state}>{state}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="City"
        label={t("city")}
        rules={[{ type: "string", required: true }]}
      >
        {/* <Input /> */}
        <Select value={city}>
          {states[state as keyof State].map((city) => (
            <Select.Option key={city}>{city}</Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="ZIP Code"
        label={t("zip-code")}
        rules={[{ type: "string", required: true }]}
      >
        <Input type="number" />
      </Form.Item>
      {/* </Space> */}

      <Form.Item
        name="Street Adress"
        label={t("street-adress")}
        rules={[{ type: "string", required: true }]}
      >
        <Input />
      </Form.Item>
    </>
  );
});

export default AddressInformation;
