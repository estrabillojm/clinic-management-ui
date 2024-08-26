import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1, 
    fontSize: 12
  }
});

const MedicalCertificate = (history: any, patientDetails: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>MED CERT</Text>
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