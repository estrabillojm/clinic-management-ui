import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import clinicLogo from "../../../../assets/docpie_general.jpg";
import prescriptionLogo from "../../../../assets/rx.png";

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
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
  },
  infoRow1: {
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
  },
  bodySignature: {
    position: 'absolute',
    top: 400,
    right: 10,
    marginTop: 75,
  },
  bodySignatureName: {
    textAlign: "center",
  },
});

const Prescription = (history: any, patientDetails: any) => (
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
              Stall 3, 093 Henson Avenue, Fatima Village, Porac Pampanga
            </Text>
          </View>
        </View>
        <View style={styles.patientInfo}>
          <View style={[styles.infoRow1]}>
            <Text>NAME: ________________________</Text>
            <Text>ADDRESS: ________________________</Text>
          </View>
          <View style={[styles.infoRow1, { marginLeft: 5 }]}>
            <Text>AGE/SEX: ________________________</Text>
            <Text>DATE: ________________________</Text>
          </View>
        </View>
        <View>
          <Image style={styles.imageRx} src={prescriptionLogo} />
        </View>
        <View style={styles.bodySignature}>
          <Text>_________________________</Text>
          <View style={styles.bodySignatureName}>
            <Text style={{ fontSize: 10, fontWeight: 700, marginRight: 12 }}>
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
      </View>
      {/* <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
);

export default Prescription