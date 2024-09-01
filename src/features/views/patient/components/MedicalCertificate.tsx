import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import clinicLogo from '../../../../assets/docpie_general.jpg';
import dayjs from "dayjs";

Font.register({
  family: 'OpenSans',
  fonts: [
    { src: '../../../../assets/fonts/Open_Sans/OpenSans-Italic.ttf'},
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 5,
    flexGrow: 1,
    fontSize: 12,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  headerTextAlignment: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTopText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textBold: {
    fontWeight: 700,
    marginVertical: 20,
  },
  textItalic: {
    fontFamily: "Times-Italic",
    fontStyle: "italic",
  },
  bodyHeader: {
    marginTop: 40,
    paddingHorizontal: 10,
    lineHeight: 2,
  },
  bodyFirstParagraph: {
    marginTop: 40,
  },
  bodySignature: {
    textAlign: "right",
    marginTop: 75,
  },
  bodySignatureName: {
    textAlign: "right",
  },
  bodyDrySeal: {
    textAlign: "left",
  },
  contentLastName: {
    position: "absolute",
    top: 310,
    left: 125,
  },
  contentAge: {
    position: "absolute",
    top: 310,
    right: 180,
  },
  contentAddress: {
    position: "absolute",
    top: 335,
    left: 50,
  },
  contentCreatedAt: {
    position: "absolute",
    top: 360,
    left: 170,
  },
  contentDiagnosis: {
    position: "absolute",
    top: 400,
    left: 90,
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

const MedicalCertificate = (props: any) => {
  const { history, patientDetails, address, cities } = props;
  const birthDate = patientDetails?.result?.dateOfBirth;
  let age = birthDate ? calculateAge(birthDate) : "N/A";

  const provinceId = patientDetails?.result?.provinceId;
  const barangay = patientDetails?.result?.barangay;
  const street = patientDetails?.result?.street;
  const cityId = patientDetails?.result?.cityId;
  const createdAt = history?.result?.createdAt; 
  const diagnosis = history?.result?.remarks; 

  let province = address.results.find(
    province => province.code === provinceId
  );
  let city = cities.results.find((city) => city.code === cityId);

  let finalAddress = street + " " + barangay + " " + city.name + " " + province.name;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.headerSection}>
            <Image style={styles.image} src={clinicLogo} />
            <View style={styles.headerTextAlignment}>
              <Text style={styles.headerTopText}>
                Sylvia Pamela Juan-Samiley, OD, MD, DipHLM, DPCOM, CHA
              </Text>
              <Text>Optometrist/Occupational Medicine/Family Physician</Text>
              <Text>
                Stall 3, 093 Henson Avenue, Fatima Village, Porac Pampanga
              </Text>
            </View>
          </View>
          <View style={styles.title}>
            <Text>MEDICAL CERTIFICATE</Text>
          </View>
          <View style={styles.bodyHeader}>
            <Text>To Whom It May Concern,</Text>
            <Text style={styles.bodyFirstParagraph}>
              This is to clarify that _____________________________________,
              ________ years old, male/female
            </Text>
            <Text>
              from
              _______________________________________________________________________________
            </Text>
            <Text>was seen and examined on ______________________________.</Text>
            <View style={styles.textBold}>
              <Text>DIAGNOSIS: ____________________________________________________________________</Text>
            </View>
            <View style={styles.textBold}>
              <Text>
                Recommendation:
                _________________________________________________________________
              </Text>
              <Text>
                ________________________________________________________________________________
              </Text>
              <Text>
                ________________________________________________________________________________
              </Text>
            </View>
            <View>
              <Text style={styles.textItalic}>
                This certification is issued upon the request of the patient for
                whatever purpose it may serve EXCEPT Medico-Legal case and
                Covid-19 clearance.
              </Text>
            </View>
            <View style={styles.bodySignature}>
              <Text>_________________________</Text>
              <View style={styles.bodySignatureName}>
                <Text
                  style={{ fontSize: 10, fontWeight: 700, marginRight: 12 }}
                >
                  Dr. Sylvia Pamela Juan-Samiley
                </Text>
                <Text style={{ fontSize: 7, fontWeight: 400, marginRight: 36 }}>
                  License No. 10398/135866
                </Text>
                <Text style={{ fontSize: 7, fontWeight: 400, marginRight: 93 }}>
                  PTR No.
                </Text>
                <Text style={{ fontSize: 7, fontWeight: 400, marginRight: 98 }}>
                  S2 No.
                </Text>
              </View>
            </View>
            <View style={styles.bodyDrySeal}>
              <Text style={{ fontSize: 8, marginLeft: 15 }}>
                Not valid without official dry seal
              </Text>
            </View>
          </View>

          <Text style={styles.contentLastName}>
            {patientDetails?.result?.firstName +
              " " +
              patientDetails?.result?.middleName +
              " " +
              patientDetails?.result?.lastName}
          </Text>
          <Text style={styles.contentAge}>{age}</Text>
          <Text style={styles.contentAddress}>{finalAddress}</Text>
          <Text style={styles.contentCreatedAt}>
            {dayjs(createdAt).format("LLL")}
          </Text>
          <Text style={styles.contentDiagnosis}>{diagnosis}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MedicalCertificate