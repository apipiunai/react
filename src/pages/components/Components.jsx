import { useState } from "react";
import Card from "../../components/Card";
import InputText from "../../components/InputText";
import Password from "../../components/Password";
import Select from "../../components/Select";
import DatePicker from "../../components/DatePicker";
import Button from "../../components/Button";
import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

export default function Components() {

    const [inputText, setInputText] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [selectValue, setSelectValue] = useState("option1");
    const [dateValue, setDateValue] = useState("");
    const [tabValue, setTabValue] = useState(0);

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <h2>Card:</h2>
                <Card style={{ width: "150px", padding: 10 }}>
                    Card
                </Card>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <h2>InputText:</h2>
                <InputText placeholder="text" value={inputText} setValue={setInputText} />
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <h2>Password:</h2>
                <Password placeholder="password" value={inputPassword} setValue={setInputPassword} />
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <h2>DatePicker:</h2>
                <DatePicker value={dateValue} setValue={setDateValue} />
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <h2>Select:</h2>
                <Select options={["option1", "option2", "option3"]} value={selectValue} setValue={setSelectValue} />
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <h2>Button:</h2>
                <Button text="Button" onClick={() => alert("Button clicked")} />
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <h2>Tabs:</h2>
                <Tabs tabs={["tab1", "tab2", "tab3"]} tab={tabValue} setTab={setTabValue} />
            </div>

            <div style={{ display: "flex", width: 200, gap: 20, alignItems: "center" }}>
                <h2>Spinner:</h2>
                <Spinner size={20} color="red"/>
            </div>
        </div>
    )
}