import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../constants/theme';

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  container: { flex: 1, paddingHorizontal: Spacing.xl },
  searchWrap: { marginTop: Spacing.xs, marginBottom: Spacing.lg },
  filterWrap: { marginBottom: Spacing.lg },
  listContent: { paddingBottom: 140 },
  empty: { alignItems: 'center', paddingTop: Spacing.huge },
  emptyText: { color: Colors.textMuted, fontSize: 14 },
});
