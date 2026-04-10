import { StyleSheet } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 140,
  },

  /* ------------- Commission Balance card ------------- */
  commissionCard: {
    backgroundColor: '#151116',
    borderRadius: Radius.xl,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(245, 196, 81, 0.18)',
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 10,
    alignItems: 'center',
  },
  cardHeaderRow: {
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  cardLabel: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: '600',
  },

  bigAmount: {
    color: Colors.gold,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  subAmount: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    marginTop: 4,
    textAlign: 'center',
  },

  innerDivider: {
    height: 1,
    backgroundColor: 'rgba(245, 196, 81, 0.15)',
    marginVertical: Spacing.lg,
    alignSelf: 'stretch',
  },

  inlineStatsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  inlineStatCol: { flex: 1, alignItems: 'center' },
  inlineStatDivider: {
    width: 1,
    height: 32,
    backgroundColor: Colors.divider,
  },
  inlineStatLabel: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  inlineStatValue: {
    color: Colors.profitGreen,
    fontWeight: '700',
    fontSize: 18,
    marginTop: 6,
    textAlign: 'center',
  },
  inlineStatSub: {
    color: Colors.profitGreen,
    fontSize: 11,
    marginTop: 2,
    opacity: 0.85,
    textAlign: 'center',
  },

  /* ------------- Lifetime Earning card ------------- */
  sectionGap: { height: Spacing.lg },

  earningCard: {
    backgroundColor: '#151116',
    borderRadius: Radius.xl,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(245, 196, 81, 0.12)',
    alignItems: 'center',
  },
  earningLabel: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: '600',
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  earningBigAmount: {
    color: Colors.gold,
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0.3,
    textAlign: 'center',
  },

  threeColRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  threeCol: { flex: 1, alignItems: 'center' },
  threeColValue: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',
  },
  threeColSub: {
    color: Colors.profitGreen,
    fontSize: 11,
    marginTop: 2,
    textAlign: 'center',
  },

  /* ------------- Stat strip (12 / $48.2K / +18%) ------------- */
  statStripRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginTop: Spacing.md,
  },
  statStripCard: {
    flex: 1,
    backgroundColor: '#151116',
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    alignItems: 'center',
  },
  statStripValue: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: '800',
  },
  statStripValueGreen: {
    color: Colors.profitGreen,
    fontSize: 18,
    fontWeight: '800',
  },
  statStripLabel: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    fontSize: 9,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    marginTop: 4,
  },

  /* ------------- Milestones ------------- */
  sectionLabelRow: {
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
  },
  sectionLabel: {
    ...Typography.captionSmall,
    color: Colors.textSecondary,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    fontWeight: '700',
  },

  milestoneCard: {
    backgroundColor: '#151116',
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg + 2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  milestoneHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  milestoneTitle: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: 15,
  },
  milestoneAmount: {
    color: Colors.gold,
    fontWeight: '800',
    fontSize: 18,
  },
  milestoneTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#26202a',
    overflow: 'hidden',
  },
  milestoneFill: {
    height: '100%',
    backgroundColor: Colors.gold,
    borderRadius: 4,
  },
  milestoneFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.sm + 2,
  },
  milestoneFooterSide: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    fontSize: 10,
  },
  milestoneFooterMid: {
    ...Typography.captionSmall,
    color: Colors.textSecondary,
    fontSize: 10,
    fontWeight: '500',
  },

  /* ------- milestone chain ------- */
  chainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.lg,
  },
  chainChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: 5,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: '#1a151c',
  },
  chainChipActive: {
    borderColor: Colors.gold,
    backgroundColor: 'rgba(245, 196, 81, 0.10)',
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },
  chainDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.textSubtle,
    marginRight: 4,
  },
  chainDotActive: {
    backgroundColor: Colors.gold,
  },
  chainLabel: {
    ...Typography.captionSmall,
    color: Colors.textSecondary,
    fontSize: 10,
    fontWeight: '600',
  },
  chainLabelActive: { color: Colors.gold },
  chainConnector: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 2,
  },

  /* ------------- Quick Actions ------------- */
  actionsGrid: {
    marginTop: Spacing.md,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
});
