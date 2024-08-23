import { OPTIC_ENUM } from "../../../../../../enums/optic";
import AutoComplete from "../../../../../components/shared/form/AutoComplete";
import Input from "../../../../../components/shared/form/Input";
// import { useDispatch, useSelector } from "react-redux";
const OpticalTab = ({ selectedTab }: any) => {
  // const dispatch = useDispatch();

  const data = {
    opticOdSphere: "",
    opticOdCyclinder: "",
    opticOdAxis: "",
    opticOdAdd: "",
    opticOsSphere: "",
    opticOsCyclinder: "",
    opticOsAxis: "",
    opticOsAdd: "",
    opticType: "",
    opticCoatingInstrument: "",
    opticRemark: "",
    opticLens: ""
  };

  return (
    <>
      <div className={`${selectedTab === 2 ? "block" : "hidden"}`}>
        <div className="grid-span-12 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Oculus Dexter (Right)</h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Sphere"
              fieldName="opticOdSphere"
              defaultValue={data.opticOdSphere}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Cyclinder"
              fieldName="opticOdCyclinder"
              defaultValue={data.opticOdCyclinder}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Axis"
              fieldName="opticOdAxis"
              defaultValue={data.opticOdAxis}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OD Add"
              fieldName="opticOdAdd"
              defaultValue={data.opticOdAdd}
            />
          </div>
        </div>

        <div className="grid-span-12 gap-4 pb-2">
          <h3 className="text-primary font-semibold">Oculus Sinister (Left)</h3>
        </div>
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Sphere"
              fieldName="opticOsSphere"
              defaultValue={data.opticOsSphere}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Cyclinder"
              fieldName="opticOsCyclinder"
              defaultValue={data.opticOsCyclinder}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Axis"
              fieldName="opticOsAxis"
              defaultValue={data.opticOsAxis}
            />
          </div>
          <div className="col-span-3">
            <Input
              type="text"
              label="OS Add"
              fieldName="opticOsAdd"
              defaultValue={data.opticOsAdd}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-8 pt-8 border-t">
          <div className="col-span-4">
            <AutoComplete
              label="Type"
              fieldName="opticType"
              isRequired={false}
              options={[{ value: "value1", label: "Value 1"}, { value: "value2", label: "Value 2"}]}
              defaultValue={data.opticType}
            />
          </div>
          <div className="col-span-4">
            <AutoComplete
              label="Coating Instrument"
              fieldName="opticCoatingInstrument"
              isRequired={false}
              options={[{ value: "value1", label: "Value 1"}, { value: "value2", label: "Value 2"}]}
              defaultValue={data.opticCoatingInstrument}
            />
          </div>

          <div className="col-span-4">
            <AutoComplete
              label="Coating Instrument"
              fieldName="opticLens"
              isRequired={false}
              options={OPTIC_ENUM.lens}
              defaultValue={data.opticLens}
            />
          </div>

        </div>


        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-6">
            <Input
              type="string"
              label="Remarks"
              fieldName="opticRemark"
              defaultValue={data.opticRemark}
              isMultiline={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OpticalTab;
