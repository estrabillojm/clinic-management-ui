import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1, 
    fontSize: 12
  }
});

const Prescription = (history: any, patientDetails: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>PRESCRIPTION</Text>
        <Text>
          {/* REMOVE THIS JSON.stringify(history) AND JSON.stringify(patientDetails) */}
          { JSON.stringify(history) }
          { JSON.stringify(patientDetails) }
        </Text>
      </View>
      {/* <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
);

export default Prescription