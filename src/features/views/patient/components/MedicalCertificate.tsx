import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import clinicLogo from '../../../../assets/docpie_general.jpg';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 5,
    flexGrow: 1, 
    fontSize: 12
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  headerTextAlignment: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headerTopText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  title: {
    textAlign: 'center',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

const MedicalCertificate = (history: any, patientDetails: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.headerSection}>
          <Image 
          style={styles.image}
          src={clinicLogo}
          />
          <View style={styles.headerTextAlignment}>
            <Text style={styles.headerTopText}>
              Sylvia Pamela Juan-Samiley, OD, MD, DipHLM, DPCOM, CHA
            </Text>
            <Text>
              Optometrist/Occupational Medicine/Family Physician
            </Text>
            <Text>
              Stall 3, 093 Henson Avenue, Fatima Village, Porac Pampanga
            </Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text>MEDICAL CERTIFICATE</Text>
        </View>
        <View>
          <Text>To Whom It May Concern,</Text>
        </View>
        
        <Text>
          {/* REMOVE THIS JSON.stringify(history) AND JSON.stringify(patientDetails) */}
          { JSON.stringify(history) }
          { JSON.stringify(patientDetails) }
        </Text>
      </View>
    </Page>
  </Document>
);

export default MedicalCertificate