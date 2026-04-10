import { StyleSheet } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.background },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: 140,
  },

  /* ------------- shared section label ------------- */
  sectionLabelRow: {
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
  },
  sectionLabel: {
    color: Colors.textMuted,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: '700',
  },

  /* ------------- Available Balance hero card ------------- */
  heroCard: {
    backgroundColor: '#151116',
    borderRadius: Radius.xl,
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(245, 196, 81, 0.18)',
    alignItems: 'center',
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 10,
  },
  heroLabel: {
    color: Colors.textMuted,
    fontSize: 10,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  heroAmount: {
    color: Colors.gold,
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: 0.3,
    marginTop: Spacing.sm,
    textAlign: 'center',
  },
  heroSub: {
    color: Colors.textMuted,
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  withdrawBtn: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.xxl,
    paddingVertical: Spacing.md,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.gold,
    backgroundColor: 'rgba(245, 196, 81, 0.06)',
  },
  withdrawText: {
    color: Colors.gold,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  addLink: {
    marginTop: Spacing.md,
    color: Colors.gold,
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  /* ------------- two mini stat pills ------------- */
  miniStatsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
  miniStatCard: {
    flex: 1,
    backgroundColor: '#151116',
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: Spacing.md + 2,
    paddingHorizontal: Spacing.md,
  },
  miniStatLabel: {
    color: Colors.textMuted,
    fontSize: 11,
    marginBottom: 6,
  },
  miniStatValue: {
    fontSize: 20,
    fontWeight: '800',
  },
  miniStatSub: {
    fontSize: 11,
    marginTop: 2,
  },

  /* ------------- Commission timeline ------------- */
  timelineCard: {
    backgroundColor: '#151116',
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: Spacing.lg,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md + 2,
  },
  timelineRowBorder: {
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
  timelineTitle: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
  timelineAmount: {
    color: Colors.profitGreen,
    fontSize: 14,
    fontWeight: '700',
  },

  /* ------------- Breakdown row ------------- */
  breakdownRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  breakdownCard: {
    flex: 1,
    backgroundColor: '#151116',
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    alignItems: 'center',
  },
  breakdownLabel: {
    color: Colors.textMuted,
    fontSize: 11,
    marginBottom: 6,
    textAlign: 'center',
  },
  breakdownValue: {
    color: Colors.gold,
    fontSize: 20,
    fontWeight: '800',
  },

  /* ------------- Monthly average ------------- */
  avgCard: {
    backgroundColor: '#151116',
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
  },
  avgHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  avgLabel: {
    color: Colors.textMuted,
    fontSize: 11,
  },
  avgBasedOn: {
    color: Colors.textMuted,
    fontSize: 10,
    marginTop: 2,
  },
  avgAmount: {
    color: Colors.gold,
    fontSize: 28,
    fontWeight: '800',
    marginTop: 4,
  },
  avgDivider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: Spacing.md,
  },
  avgSplitRow: {
    flexDirection: 'row',
  },
  avgSplitCol: { flex: 1 },
  avgSplitLabel: { color: Colors.textMuted, fontSize: 11 },
  avgSplitValue: {
    color: Colors.textPrimary,
    fontSize: 15,
    fontWeight: '700',
    marginTop: 3,
  },

  /* ------------- Milestone (same as home) ------------- */
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
  chainDotActive: { backgroundColor: Colors.gold },
  chainLabel: {
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

  /* ------------- Full history button ------------- */
  historyBtn: {
    marginTop: Spacing.xl,
    paddingVertical: Spacing.md + 2,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.gold,
    backgroundColor: 'rgba(245, 196, 81, 0.06)',
  },
  historyIcon: { color: Colors.gold, fontSize: 14, marginRight: 8 },
  historyText: {
    color: Colors.gold,
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.3,
  },
});
