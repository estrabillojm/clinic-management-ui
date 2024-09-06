import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import clinicLogo from "../../../../assets/docpie_general.jpg";
import prescriptionLogo from "../../../../assets/rx.png";
import dayjs from "dayjs";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    flexGrow: 1,
    fontSize: 12,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  imageRx: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 25,
    left: 10,
  },
  headerTextAlignment: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTopText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  patientInfo: {
    borderTop: "2px solid black",
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 5,
  },
  infoRow1: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 5,
    fontSize: 10,
  },
  bodySignature: {
    marginTop: 350,
    marginRight: 25,
    textAlign: 'right',
  },
  bodySignatureName: {
    textAlign: "right",
  },
});

const calculateAge = (birthDateString: string): number => {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const Prescription = (props: any) => {

  const { history, patientDetails, address, cities} = props;

  const fullName =
    patientDetails?.result.firstName +
    " " +
    patientDetails?.result.middleName +
    " " +
    patientDetails?.result.lastName; 

  const birthDate = patientDetails?.result?.dateOfBirth;
  const age = birthDate ? calculateAge(birthDate) : "N/A";
  const sex = patientDetails?.result?.gender;
  const provinceId = patientDetails?.result?.provinceId;
  const barangay = patientDetails?.result?.barangay;
  const street = patientDetails?.result?.street;
  const cityId = patientDetails?.result?.cityId;
  const currentDateTime = dayjs().format("LLL");
  const branchName = history?.result?.branchName

  let province = address.results.find(
    (province: any) => province.code === provinceId
  );
  let city = cities.results.find((city: any) => city.code === cityId);

  let finalAddress =
    street + " " + barangay + " " + city.name + " " + province.name;

  return (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.headerSection}>
            <Image style={styles.image} src={clinicLogo} />
            <View style={styles.headerTextAlignment}>
              <Text style={styles.headerTopText}>
                Sylvia Pamela Juan-Samiley, OD, MD, DipHLM, DPCOM, CHA
              </Text>
              <Text style={{ fontSize: 8 }}>
                Optometrist/Occupational Medicine/Family Physician
              </Text>
              <Text style={{ fontSize: 8 }}>
                { branchName }
              </Text>
            </View>
          </View>
          <View style={styles.patientInfo}>
            <View style={[styles.infoRow1]}>
              <Text>NAME: ________________________</Text>
              <Text>ADDRESS: ________________________________</Text>
            </View>
            <View style={[styles.infoRow1, { marginLeft: 20 }]}>
              <Text>AGE/SEX: __________________</Text>
              <Text>DATE: ______________________</Text>
            </View>
          </View>
          <View>
            <Image style={styles.imageRx} src={prescriptionLogo} />
          </View>
          <View style={styles.bodySignature}>
            <Text>_________________________</Text>
            <View style={styles.bodySignatureName}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  marginRight: 12,
                  marginTop: 5,
                }}
              >
                Dr. Sylvia Pamela Juan-Samiley
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  fontWeight: 400,
                  marginRight: 40,
                  marginTop: 5,
                }}
              >
                License No. 10398/135866
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  fontWeight: 400,
                  marginRight: 96,
                  marginTop: 5,
                }}
              >
                PTR No.
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  fontWeight: 400,
                  marginRight: 101,
                  marginTop: 5,
                }}
              >
                S2 No.
              </Text>
            </View>
          </View>
          <Text
            style={{ position: "absolute", top: 125, left: 50, fontSize: 10 }}
          >
            {fullName}
          </Text>
          <Text
            style={{ position: "absolute", top: 125, right: 73, fontSize: 10 }}
          >
            {age} / {sex}
          </Text>
          <Text
            style={{ position: "absolute", top: 140, left: 59, fontSize: 8 }}
          >
            {finalAddress}
          </Text>
          <Text
            style={{ position: "absolute", top: 140, right: 30, fontSize: 8 }}
          >
            {currentDateTime}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default Prescription