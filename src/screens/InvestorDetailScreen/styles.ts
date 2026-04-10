import { StyleSheet } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 140,
  },

  profileWrap: { alignItems: 'center', marginTop: Spacing.sm },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.gold,
  },
  avatarInitial: {
    ...Typography.displayAmount,
    color: Colors.gold,
    fontSize: 32,
  },
  name: {
    ...Typography.headingLarge,
    color: Colors.textPrimary,
    marginTop: Spacing.md,
  },
  meta: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    marginTop: 4,
  },
  kycBadge: {
    marginTop: Spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.profitGreenSoft,
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: 'rgba(38, 224, 127, 0.35)',
  },
  kycCheck: { color: Colors.profitGreen, marginRight: 6, fontSize: 12 },
  kycText: {
    ...Typography.captionSmall,
    color: Colors.profitGreen,
    fontWeight: '700',
  },

  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
  contactBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: Radius.pill,
  },
  contactIcon: { color: Colors.gold, fontSize: 14, marginRight: 6 },
  contactText: {
    ...Typography.captionSmall,
    color: Colors.textPrimary,
    fontWeight: '600',
  },

  amountCard: {
    marginTop: Spacing.xl,
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.lg,
  },
  amountCol: { flex: 1 },
  amountDivider: {
    width: 1,
    backgroundColor: Colors.divider,
    marginHorizontal: Spacing.md,
  },
  amountLabel: { ...Typography.captionSmall, color: Colors.textMuted },
  amountValue: {
    ...Typography.headingMedium,
    color: Colors.textPrimary,
    marginTop: 4,
  },

  returnsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.md,
  },

  section: { marginTop: Spacing.xl },

  downloadBtn: {
    marginTop: Spacing.xl,
    backgroundColor: Colors.gold,
    borderRadius: Radius.pill,
    paddingVertical: Spacing.md + 2,
    alignItems: 'center',
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 14,
    elevation: 10,
  },
  downloadText: {
    color: Colors.black,
    fontWeight: '700',
    letterSpacing: 0.3,
    fontSize: 14,
  },
});
