import { useState } from "react";
import { Form, Input, Select } from "antd";
import { useTranslation } from "react-i18next";

interface Country {
  [key: string]: { states: string[] }
}

interface State {
  [key: string]: string[];
}

const AddressInformation = ({ form }: { form: any }) => {
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

    form.setFieldValue("State", "");
    form.setFieldValue("City", "")
    form.setFieldValue("ZIP Code", "")
    form.setFieldValue("Street Adress", "")
  };

  const handleStateChange = (value: string) => {
    setState(value);
    setCity(states[value][0]);

    form.setFieldValue("City", "");
    form.setFieldValue("ZIP Code", "")
    form.setFieldValue("Street Adress", "")
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
        <Select onChange={handleCountryChange} options={
          Object.keys(countries).map((country) => {
            return {
              value: country,
              label: country
            }
          })
        }>
        </Select>
      </Form.Item>

      <Form.Item
        name="State"
        label={t("state")}
        rules={[{ type: "string", required: true }]}
      >
        <Select onChange={handleStateChange} options={
          countries[country].states.map((state) => {
            return {
              value: state,
              label: state
            }
          })
        }>
        </Select>
      </Form.Item>

      <Form.Item
        name="City"
        label={t("city")}
        rules={[{ type: "string", required: true }]}
      >
        <Select value={city} options={
          states[state].map((city) => {
            return {
              value: city,
              label: city
            }
          })
        }>
        </Select>
      </Form.Item>

      <Form.Item
        name="ZIP Code"
        label={t("zip-code")}
        rules={[{ type: "string", required: true }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        name="Street Adress"
        label={t("street-adress")}
        rules={[{ type: "string", required: true }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default AddressInformation;
