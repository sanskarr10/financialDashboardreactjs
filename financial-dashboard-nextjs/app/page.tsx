'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import AumSipCards from '../components/AumSipCards';
import FilterBar from '../components/FilterBar';
import StatCard from '../components/StatCard';
import ClientsBubbleChart from '../components/Charts/ClientsBubbleChart';
import SipBusinessChart from '../components/Charts/SipBusinessChart';
import MonthlyMISChart from '../components/Charts/MonthlyMISChart';
import PdfDownloadButton from '../components/PdfDownloadButton';
import { Summary } from '../lib/types';

export default function Page() {
  const [range, setRange] = useState<number>(30);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [clients, setClients] = useState<any[]>([]);
  const [sipBiz, setSipBiz] = useState<any[]>([]);
  const [monthly, setMonthly] = useState<any[]>([]);

  const containerId = 'pdf-target';

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setSummary(null);
      const [sumRes, cRes, sRes, mRes] = await Promise.all([
        fetch(`/api/summary?range=${range}`),
        fetch(`/api/charts/clients?range=${range}`),
        fetch(`/api/charts/sip-business?range=${range}`),
        fetch(`/api/charts/monthly-mis?range=${range}`),
      ]);
      if (cancelled) return;
      setSummary(await sumRes.json());
      setClients(await cRes.json());
      setSipBiz(await sRes.json());
      setMonthly(await mRes.json());
    };
    load();
    return () => { cancelled = true; };
  }, [range]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="container py-6 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-2xl font-semibold">Financial Dashboard</h1>
          <div className="flex gap-2">
            <FilterBar active={range} onChange={setRange} />
            <PdfDownloadButton targetId={containerId} />
          </div>
        </div>

        <section id={containerId} className="space-y-4">
          {/* AUM + SIP Cards */}
          {summary ? (
            <AumSipCards aum={summary.aum} sip={summary.sip} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card p-6 h-32 skeleton animate-shimmer rounded-2xl" />
              <div className="card p-6 h-32 skeleton animate-shimmer rounded-2xl" />
            </div>
          )}

          {/* Stat Cards */}
          {summary ? (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <StatCard title="Purchases" value={summary.stats.purchases.toString()} />
              <StatCard title="Redemptions" value={summary.stats.redemptions.toString()} />
              <StatCard title="Rejected Transactions" value={summary.stats.rejected.toString()} />
              <StatCard title="SIP Rejections" value={summary.stats.sipRejections.toString()} />
              <StatCard title="New SIP" value={summary.stats.newSip.toString()} />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Array.from({length:5}).map((_,i) => <div key={i} className="card h-24 skeleton animate-shimmer rounded-2xl" />)}
            </div>
          )}

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {clients.length ? <ClientsBubbleChart data={clients} /> : <div className="card h-80 skeleton animate-shimmer rounded-2xl" />}
            {sipBiz.length ? <SipBusinessChart data={sipBiz} /> : <div className="card h-80 skeleton animate-shimmer rounded-2xl" />}
          </div>
          <div>
            {monthly.length ? <MonthlyMISChart data={monthly} /> : <div className="card h-80 skeleton animate-shimmer rounded-2xl" />}
          </div>
        </section>
      </main>
    </div>
  );
}
